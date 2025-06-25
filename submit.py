from flask import Flask, request, render_template_string
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string('''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Formulario de Contacto</title>
    </head>
    <body>
        <!-- SECCION CONTACTO -->
        <section id="contacto" class="contacto">
            <div class="contenido-seccion">
                <h2>CONTACTO</h2>
                <div class="fila">
                    <!-- Formulario -->
                    <div class="col">
                        <form id="contactForm" action="/send_email" method="post">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" placeholder="Tú Nombre" required>

                            <label for="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Dirección de correo" required>

                            <label for="tema">Tema:</label>
                            <input type="text" id="tema" name="tema" placeholder="Tema" required>

                            <label for="message">Mensaje:</label>
                            <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>

                            <button type="submit"><span></span>Enviar</button>
                        </form>
                        <span class="overlay"></span>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>
    ''')

@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    tema = request.form['tema']
    message = request.form['message']

    from_email = "francisco.dallarizza@gmail.com"
    from_password = "psbv vynz okxb rmfz"
    to_email = "francisco.dallarizza@gmail.com"

    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = tema

    body = f"Nombre: {name}\nEmail: {email}\nMensaje:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(from_email, from_password)
        text = msg.as_string()
        server.sendmail(from_email, to_email, text)
        server.quit()
        return "Correo enviado exitosamente!"
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
