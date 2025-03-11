function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * 0.1;
    const nhif = grossSalary * 0.025;
    const nssf = grossSalary * 0.06;
    const netSalary = grossSalary - (tax + nhif + nssf);
    return ( grossSalary, tax, nhif, nssf, netSalary );
}