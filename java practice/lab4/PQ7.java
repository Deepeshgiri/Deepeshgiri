import java.util.Scanner;

public class PQ7 {
    //⦁	Write an user defined function to compute x power y, without using math library.

    public static int pow(int a, int b){
        int sum=1;
        for(int i=1;i<=b;i++){
            sum =sum*a;
        }return sum;
    }
    public static void main(String args []){
        int x,y;
        Scanner sc = new Scanner(System.in);
        x= sc.nextInt();
        y=sc.nextInt();
       // pow(x,y);
        System.out.println(pow(x,y));
    }
}
