import java.util.Scanner;

public class AQ1 {
    //Write a program to print the first 10 rows of the multiplication table of a given number, in the following format.
    //3 * 1 = 3
    //3 * 2 = 6
    public static void main(String args []){
        int a,n;
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        for(int i =1;i<=10;i++){
            System.out.println(n+"*"+i+"="+n*i);
        }
    }
}
