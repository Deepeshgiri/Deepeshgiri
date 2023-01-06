public class AQ6 {
    //Given  a positive integer n, write a function convertToDigit(n)
    // whose task is to convert n to a single digit using the process described in the following example.
    //Example: 369 -> 3+6+9 = 18 -> 1 + 8 = 9.
    //Write another function sumOfDigits(n) to compute the sum of the digits in n,
    // and use this function inside convertToDigit(n).
    public static int sumOfDigit(int b,int c){
        int sum=0;
        sum=sum+b+c;
        return sum;
    }
    public static int convertToDigit(int a){
        int p=0,sum=0;

        while(a>0){
           p= a%10;
            sum=sumOfDigit(sum,p);
           a=a/10;
        }if(sum>9){
            sum=convertToDigit(sum);
        }return sum;
    }
    public static void main (String args []){
        int n;
        n=469;
        int p=0;
        System.out.println(convertToDigit(n));
//        String a= String.valueOf(n);
//        int b=a.length();



    }
}
