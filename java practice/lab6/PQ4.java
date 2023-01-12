import java.util.Scanner;

public class PQ4 {
    //Given two words A and B, write a program to test whether A is less than B,
    // or A is greater than B or A is equal to B. Print 0  if A is equal to B.
    // Print -1 if A is less than B. Print 1 if A is greater than B. For comparing any two words,
    // it is recommended to follow the dictionary order.

    public static void main(String args []){
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        char []c=a.toCharArray();
        char d[]=b.toCharArray();
        if (a.compareTo(b)>0){
            System.out.println("1");
        } else if (a.compareTo(b)==0) {
            System.out.println("0");
        }else{
            System.out.println("-1");
        }


    }
}
