import java.util.Scanner;

public class EQ1 {
    //Write a program to reverse the individual words in a given sentence.
    static String reverse(String str)
    {
        String rev="";
        for(int i=str.length();i>0;--i)
        {
            rev=rev+(str.charAt(i-1));
        }
        return rev;
    }
    public static void main(String args []){
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        System.out.println(reverse(a));

    }
}
