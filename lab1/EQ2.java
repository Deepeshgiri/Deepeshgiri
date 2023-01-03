import java.util.Scanner;

public class EQ2 {
    // Write a program to find the greatest common divisor of two numbers.
    public static void main(String args []) {
        int x, y,r=1,temp;

        Scanner sc = new Scanner(System.in);
        x= sc.nextInt();
        y=sc.nextInt();
        if(x>y){
            temp=x;
            x=y;
            y=temp;

        }
        while(y>x){
            r=y%x;
            if (r==0){
                System.out.println("GCD = "+x);
                break;
                }
            y=x;
            x=r;
            }





    }
}
