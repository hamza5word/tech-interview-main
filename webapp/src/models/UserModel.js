export function UserModel(id=null, name="", surname="", birthDate=new Date(), email="", password="", phone="", identity="", passportNumber="") {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.email = email;
    this.password = password;
    this.c_password = password;
    this.phone = phone;
    this.identity = identity;
    this.passportNumber = passportNumber;
}