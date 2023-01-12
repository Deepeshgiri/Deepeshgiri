import java.util.Scanner;

public class IntegerOperation {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);
        System.out.println("enter the value of n");
        int n = sc.nextInt();
        int remainder=1;
        int sum = 0;
        int reverse =0;
            //Given a positive integer n, write a program to print all the digits of n individually.
        while(n>0){
            
            remainder=n%10;
            n=n/10;
            System.out.println(remainder);
            //Given a positive integer n, write a program to compute the sum of all the digits of n.
            sum=sum+remainder;
            //Given a positive integer n, write a program to reverse the digits of n and print the final result from a single variable.
            reverse =reverse*10+remainder;
        }
        System.out.println(sum);
        System.out.println(reverse);

        // Declaring the number
//        int number = 36927;
//
//        // Printing the last digit of the number
//        while (number > 0) {
//
//            // Finding the remainder (Last Digit)
//            int remainder = number % 10;
//
//            // Printing the remainder/current last digit
//            System.out.println(remainder);
//
//            // Removing the last digit/current last digit
//            number = number / 10;
//        }
    }
}
