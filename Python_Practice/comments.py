import re
def password_checker(password):
    if len(password) < 8:
        return ('Password is less than 8 characters')
    if not any (char.isdigit() for char in password):
        return ('password atleast contain one number')
    if not any (char.isupper() for char in password):
        return('it should contain uppercase letter')
    if not any(char.islower() for char in password):
        return('it should contain lowercase letter')
    if not re.search(r'[!@#$%^&*()]' , password):
        return ('it should contain atleast one special character')
    return ('Your Password is Strong')
print(password_checker("Enter the password:5"))