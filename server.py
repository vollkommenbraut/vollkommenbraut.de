#!/usr/bin/env python3
"""
Lokaler Entwicklungsserver mit 404-Seite Unterstützung.
Starte mit: python server.py
Dann öffne: http://localhost:8080
"""

import http.server
import socketserver
import os

PORT = 8082

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Prüfe ob die angeforderte Datei existiert
        path = self.translate_path(self.path)

        # Wenn der Pfad ein Verzeichnis ist, suche nach index.html
        if os.path.isdir(path):
            index_path = os.path.join(path, 'index.html')
            if os.path.exists(index_path):
                return super().do_GET()

        # Wenn die Datei existiert, liefere sie aus
        if os.path.exists(path):
            return super().do_GET()

        # Sonst zeige die 404-Seite
        self.send_error_page()

    def send_error_page(self):
        error_page = os.path.join(os.getcwd(), '404.html')
        if os.path.exists(error_page):
            self.send_response(404)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            with open(error_page, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_error(404, "File not found")

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')

    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"🌐 Server läuft auf http://localhost:{PORT}")
        print(f"📁 Serving: {os.getcwd()}")
        print("Drücke Ctrl+C zum Beenden")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server beendet")

