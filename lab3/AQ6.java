import java.util.Scanner;

public class AQ6 {
    //Write a c program to find out the sum of an A.P. series.
    //Test Data :
    //Input the starting number of the A.P. series: 1
    //Input the number of items for the A.P. series: 10
    //Input the common difference of A.P. series: 4
    //Expected Output :
    //The Sum of the A.P. series are :
    //1 + 5 + 9 + 13 + 17 + 21 + 25 + 29 + 33 + 37 = 190
    public static void main(String args []){
        int a,n,d,sum=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the starting number ");
        a= sc.nextInt();
        System.out.println("Enter total number in series ");
        n= sc.nextInt();
        System.out.println("Enter the difference between number ");
        d= sc.nextInt();
        for(int i=1;i<=n;i++){
            System.out.print(a+" + ");
            sum=sum+a;
            a=a+d;
           // sum=sum+a;

        }
        System.out.println(" = "+sum);
    }
}
