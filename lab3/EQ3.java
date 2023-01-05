import java.util.Scanner;

public class EQ3 {
    //Given a positive integer n, write a program to check whether
    // n can be expressed as the sum of two prime numbers.

    public static int prime(int a){
        int i,count=0;
        if(a==2){
            return 0;
        }
        for (i=2;i<=a;i++){
            if(a%i==0) {
                count++;
            }
        }
       if(count>1){
           return 0;
       }else return 1;
    }
    public static void main (String args []){
        int n;
        boolean flag=false;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();

        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                if(prime(i)==1){
                    if(prime(j)==1){
                        if(i+j==n){
                            System.out.println("sum of prime number "+i+" "+j);
                            flag=true;
                        }
                    }
                }
                }
            }
        if (!flag) {
            System.out.println("cannot be sum of prime");
        }

        }
    }

