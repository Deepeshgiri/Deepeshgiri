import java.util.Scanner;

public class Natural{

    public static void main(String args[]){
        //1 Write a program to print all natural numbers from 1 to n using the for loop.
//        System.out.println("Write a program to print all natural numbers from 1 to n using the for loop. ");
//        int n =1;
//        Scanner sc = new Scanner(System.in);
//        System.out.println(" enter the value of n");
//        n= sc.nextInt();
//        for (int i=1; i<=n; i++){
//            System.out.println(i);
//        }
//        System.out.println("Write a program to print all natural numbers from n2 to 1 using the for loop. ");
//        int n2 =1;
//        Scanner ac = new Scanner(System.in);
//        System.out.println(" enter the value of n2");
//        n2= ac.nextInt();
//
//        for (int j= n2 ; j>=1;j--){
//            System.out.println(j);
//        }
        //Write a program to print all odd numbers from 1 to n using the for loop.
        System.out.println(" Write a program to print all odd numbers from 1 to n3 using the for loop.");
        int n3 =1;
        Scanner bc = new Scanner(System.in);
        System.out.println(" enter the value of n3");
        n3= bc.nextInt();

        for (int j=1 ; j<=n3;j++){
            if(j%2!=0){
                System.out.println(j);
            }

        }
    }
}