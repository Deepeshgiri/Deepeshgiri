import java.util.Scanner;

public class EQ4 {
    //Write a program to print all prime numbers from 1 to n.
    public static void main(String args []) {
        int i = 0, n, count = 0;
        boolean a = true;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        for (i = 1; i <= n; i++) {
            for (int j = 2; j <= i-1; j++) {
                if ((i % j) == 0){
                    count = 1;
                }
            }
            if (count == 0) {
                System.out.print(" " +i);
            } else {
                count = 0;
            }
        }
    }}
