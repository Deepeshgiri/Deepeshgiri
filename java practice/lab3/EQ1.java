import java.util.Scanner;

public class EQ1 {
    //Write a program to convert the given decimal number to its equivalent binary form.
    public static void main(String args []){
        int n,r=0,temp=0;
        int a[]=new int[10];
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value you want to convert in binary ");
        n=sc.nextInt();
        while(n>0){
            a[temp]=n%2;
            n=n/2;
            temp++;
        }
        System.out.println("Your binary output is ");
        for(int j=temp-1;j>=0;j--){
            System.out.print(a[j]);
        }


    }

}
