import java.util.Scanner;

public class EQ2 {
    //Given a positive integer n,
    // write a program to compute the series
    // (1) + (1+2) + (1+2+3) + (1+2+3+4) + ... + (1+2+3+4+...+n).
    public static void main (String args []){
        int sum=0, n;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();

        for (int i =1; i<=n;i++){
            for(int j=1;j<=i;j++){
                sum=sum+j;
            }
        }
        System.out.println(sum);
    }
}
