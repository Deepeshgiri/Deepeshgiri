import java.util.Scanner;

public class AQ2 {
    //The Armstrong number is a number that is equal to the sum of cubes of its digits.
    // For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.
    // Write a program to find whether a given number is an Armstrong number or not.
    public static void main(String args []){
        int a,n,arm=0,temp;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        temp = n;
            while(n>0){
             a=n%10;
             arm=arm+(a*a*a);
             n= n/10;
            }
            System.out.println(arm);
            if(temp==arm){
                System.out.println("armstrong number");
            }else System.out.println("not armstrong");
        }
}


