import Account from "../src/account/core/domain/model/Account";
import BusinessException from "../src/account/core/domain/model/BusinessException";

const validAccount = new Account(1, 100, "artur");

test("value above zero is mandatory", () => {
  const credit = () => {
    validAccount.credit(0);
  };
  expect(credit).toThrow(BusinessException);
});

test("negative credit value as mandatory", () => {
  const credit = () => {
    validAccount.credit(-10);
  };
  expect(credit).toThrow(BusinessException);
});

test("credit value above zero", () => {
  validAccount.credit(1);
  const finalBalance = 100 + 1;
  expect(validAccount.getBalance()).toBe(finalBalance);
});
