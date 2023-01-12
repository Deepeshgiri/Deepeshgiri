import java.util.Scanner;

public class AQ7 {
    // [repeat] Given two numbers base x and exponent y, write a program to compute x
    //power y.
    public static void main(String args []){
        int x,y,z=1,i=1;
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        y=sc.nextInt();

        while(i<=y){
            z=z*x;
            i++;
        }
        System.out.println(z);

    }

}
