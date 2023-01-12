import java.util.Scanner;

public class PQ4 {
    //⦁	Write a program to print all prime numbers from 1 to n using functions.
    public static int prime(int a) {
        int h = a / 2, flag = 0;
        for (int i = 2; i <= h; i++) {
            if (a % i == 0) {
                flag = 1;
                break;
            }
        }

            if (flag == 0) {
                return flag=0;
            }return flag;
        }


        public static void main (String args[]){
            int n;
            Scanner sc = new Scanner(System.in);
            n = sc.nextInt();
            for(int i=2;i<=n;i++){
                if( prime(i)==0){
                    System.out.println(i);
                }
            }



        }

}
