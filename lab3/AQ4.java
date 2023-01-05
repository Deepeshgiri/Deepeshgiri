import java.util.Scanner;

public class AQ4 {
    //Write a program to find the sum of the series 1 +11 + 111 + 1111 + ... n terms.
    public static void main(String args []){
        int a=0, n,sum=0;

        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        for(int i=0;i<=(n-1);i++){
            a=a*10+1;
            sum=sum+a;
        }
        System.out.println(sum);
    }
}
