
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 6,
    rate: 7
  };
  expect(calculateMonthlyPayment(values)).toEqual ('255.74');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 17000,
    years: 9,
    rate: 12.8
  };
  expect(calculateMonthlyPayment(values)).toEqual ('265.86');
});


it("should return insanely high monthly rate", function() {
  const values = {
    amount: 200000,
    years: 10,
    rate: 56
  };
  expect(calculateMonthlyPayment(values)).toEqual ('9372.68');
});