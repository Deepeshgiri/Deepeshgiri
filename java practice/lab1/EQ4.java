import java.util.Scanner;

public class EQ4 {
    // Write a program to print the first 10 rows of the multiplication table of a
    //given number.
    public static void main(String args[]){
        int i=1,n;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the number to print table ");
        n= sc.nextInt();
        for(i=1;i<=10;i++){
            System.out.println(n+"x"+i+"="+n*i);
        }
    }
}
