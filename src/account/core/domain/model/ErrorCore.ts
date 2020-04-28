import BusinessException from "./BusinessException";

class ErrorCore {
  public static required(name: string): void {
    throw new BusinessException(`${name} is required.`);
  }

  public static nonexistent(name: string): void {
    throw new BusinessException(`${name} is nonexistent.`);
  }

  public static insufficientFunds(): void {
    throw new BusinessException("Insufficient funds.");
  }

  public static sameAccount(): void {
    throw new BusinessException("Credit and debit accounts must be different.");
  }
}

export default ErrorCore;
