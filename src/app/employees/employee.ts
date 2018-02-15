import { Iemployee } from "./iemployee";

export class Employee implements Iemployee {
    constructor(){
        this.employeeId=0;
    this.employeeName="";
    this.address="";
    this.city="";
    this.email="";
    this.phone="";
    this.avatar="";
    }
    employeeId: number;
    employeeName: string;
    address: string;
    city: string;
    email: string;
    phone: string;
    avatar?: string;
}
