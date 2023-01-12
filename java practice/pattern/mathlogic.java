import java.sql.SQLOutput;
import java.util.Scanner;

public class mathlogic {
    public static void main(String args []){

//
//       // [repeat loop] Given a number n, write a program to find the sum of 4th power of
//       // first n natural numbers.
//        int a,b,c;
//        b=1;
//        Scanner sc=new Scanner(System.in);
//        System.out.println("enter your number");
//        c= sc.nextInt();
//
//
//        for(a=1;a<=4;a++){
//
//            b=b*c;
//
//        }
//        System.out.println(b);

//        Given a number n, write a program print all the numbers
//        between x and y that are divisible with 7
//         int a,b,c,i;
//         Scanner sc =new Scanner(System.in);
//        System.out.println("enter the value of a:");
//         a = sc.nextInt();
//        System.out.println("enter the value of b:");
//         b= sc.nextInt();
//         if (a>=b){
//             for( i=b;i<=a;i++){
//                 if(i%7==0){
//                     System.out.println(i);
//                 }
//             }
//         }else
//             for( i=a;i<=b;i++){
//                if(i%7==0){
//                System.out.println(i);
//            }
//        }

             //Given two positive integers x and y, write a program to count the number of integers between x and y that are divisible by 7 or 8.
//        int i,j,y,x,c;
//        Scanner sc =new Scanner(System.in);
//        System.out.println("enter the value of X");
//        int count7=0;
//        int count8=0;
//        x = sc.nextInt();
//        System.out.println("enter the value of y");
//        y = sc.nextInt();
//        if (x>=y){
//            for (i=y; i<=x; i++){
//                if(i%7==0){
//                    System.out.println(i);
//                    count7 ++;
//                }else if(i%8==0){
//                    System.out.println(i);
//                    count8 ++;
//                }
//            }
//        }
//
//        else if (y>x){
//            for (i=x; i<=y; i++){
//                if(i%7==0){
//                    System.out.println(i);
//                    count7 ++;
//                }else if(i%8==0){
//                    System.out.println(i);
//                    count8 ++;
//                }
//            }
//
//
//    }
//        System.out.println("count7="+count7+"count8="+count8 );

        //Write a program to find the factorial of n.
//        int n;
//
//
//
//        Scanner sc =new Scanner(System.in);
//        System.out.println("enter the nymber to find factorial!!");
//        n = sc.nextInt();
//        int fact=1;
//        int i=1;
//        for (i = 1; i<=n; i++){
//           fact = i*n;
//
//
//        }

//        while(i<=n)
//        {
//            fact=i*fact;
//            i++;
//        }
//        System.out.println(fact);

      //  Given two numbers base x and exponent y, write a program to compute x
       // power y.

        int x,y;
        int sum =1;
        Scanner sc =new Scanner(System.in);
        System.out.println("enter x");
        x = sc.nextInt();
        System.out.println("enter y");
        y = sc.nextInt();

        for (int i = 1; i<=y; i++){
            sum = sum*x;


        }System.out.println(sum);

        




}}
