import java.util.Scanner;

public class AQ3 {
    //repeat loop] Given a number n, write a program to find the sum of 4th power of
    //first n natural numbers.
    public static void main(String args []){
        int n,sum=1;
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        int i=1;
        while(i<=4) {
            sum=sum*n;
            i++;
        } System.out.println(sum);
    }
}
