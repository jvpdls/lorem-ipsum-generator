Lorem Ipsum Generator
=====================

The **Lorem Ipsum Generator** is a simple application built with Python and Flask that consumes the [API Ninjas Lorem Ipsum Generator API](https://api-ninjas.com/api/loremipsum). This tool automatically generates placeholder text (Lorem Ipsum) paragraphs.

Requirements
------------

Before running the project, make sure the following packages are installed:

*   Flask
*   requests
*   python-dotenv

These packages are listed in the `requirements.txt` file.

Installation
------------

1.  Clone the repository:
    
        git clone https://github.com/jvpdls/lorem-ipsum-generator.git
        cd lorem-ipsum-generator
    
2.  Create and activate a virtual environment (optional but recommended):
    
        python -m venv venv
        source venv/bin/activate  
        # On Windows, use 
        venv\Scripts\activate
    
3.  Install the dependencies:
    
        pip install -r requirements.txt
    
4.  Rename `.env.example`to `.env`and set it up with your API key from [API Ninjas](https://api-ninjas.com/):
    
        API_KEY="YOUR_API_KEY"
    

Usage
-----

1.  Run the Flask server:
    
        flask run
    
2.  Access the application in your browser at `http://127.0.0.1:5000`.

Main Files
----------

*   `app.py`: Contains the main Flask application code.
*   `requirements.txt`: Lists the project dependencies.
*   `.env`: Environment variables file containing the API key for API Ninjas.

Contribution
------------

Contributions are welcome! Please submit a Pull Request with improvements or open an Issue to suggest new features.