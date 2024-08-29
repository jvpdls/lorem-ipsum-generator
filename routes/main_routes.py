from flask import Blueprint, render_template, request, jsonify
from datetime import datetime
from dotenv import load_dotenv
import requests
import os

project_folder = os.path.expanduser('~/lorem-ipsum-generator')
load_dotenv(os.path.join(project_folder, '.env'))

main_bp = Blueprint('main', __name__)

current_year = datetime.now().year


@main_bp.route('/')
def home():
    return render_template(
        'pages/index.html',
        title='Home',
        h1='📝 Free Lorem Ipsum Generator Tool',
        current_year=current_year,
        current_path=request.path
    )


@main_bp.route('/about-us')
def about_us():
    return render_template(
        'pages/about-us.html',
        title='About Us',
        h1='🧑‍💻 About Us',
        current_year=current_year,
        current_path=request.path
    )


@main_bp.route('/privacy-policy')
def privacy_policy():
    return render_template(
        'pages/privacy-policy.html',
        title='Privacy Policy',
        h1='🔒 Privacy Policy',
        current_year=current_year
    )


@main_bp.route('/api/loremipsum', methods=['GET'])
def get_lorem_ipsum():
    paragraphs = request.args.get('paragraphs', '2')
    start_with_lorem_ipsum = request.args.get(
        'start_with_lorem_ipsum', 'true')

    api_url = f'https://api.api-ninjas.com/v1/loremipsum?paragraphs={
        paragraphs}&start_with_lorem_ipsum={start_with_lorem_ipsum}'
    api_key = os.getenv('API_KEY')

    response = requests.get(api_url, headers={'X-Api-Key': api_key})

    if response.status_code == requests.codes.ok:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Error occurred', 'status_code': response.status_code, 'message': response.text}), response.status_code
