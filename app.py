from flask import Flask, render_template, request, flash, jsonify, make_response
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['SECRET_KEY'] = "gnee pkom gocs qnej"
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'santhiportfolio@gmail.com'
app.config['MAIL_PASSWORD'] = 'gnee pkom gocs qnej'
app.config['MAIL_DEFAULT_SENDER'] = 'santhi1098@gmail.com'

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send-email', methods=['POST'])
def send_mail():
    response_data = {}
    response_massage = ""
    details = request.get_json()
    name = details['name']
    phone_number = details['phone']
    email = details['email']
    message = details['message']

    msg = Message(subject=f"Message from {name}",
                  sender=email,
                  recipients=['santhi1098@gmail.com'],
                  body=f"Name: {name}\nEmail: {email}\nPhone Number: {phone_number}\n\nMessage:\n{message}")

    try:
        mail.send(msg)
        response_massage = 'Email send Successfully!'
    except Exception as e:
        response_massage = 'Failed to send email'

    response_data['success_message'] = response_massage
    json_data = jsonify(response_data)
    response = make_response(json_data)
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run(debug=False)