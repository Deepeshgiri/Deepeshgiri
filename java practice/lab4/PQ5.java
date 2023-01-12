import java.util.Scanner;

public class PQ5 {
    //⦁	Write a function to find the greatest common divisor (GCD) of x and y.
    public static void main(String args[]) {
        int x, y;
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        y = sc.nextInt();
        gcd(x, y);

    }

    public static void gcd(int a, int b) {
//        int r = 1;
//        if (a > b) {
//            a = a + b;
//            b = a - b;
//            a = a - b;
//        }
        System.out.println(a + " " + b);
        while (b!= 0) {
            if(a>b){
                a=a-b;
            }else{
                b=b-a;
            }
        }
        System.out.println(a);
    }
}
