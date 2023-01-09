import java.util.Scanner;

public class PQ6 {
    //Write a program to find whether the given string is a pangram.
    // A string S is referred to as a pangram if each alphabet from ‘a’ to ‘z’ appears at least once in S.
    public static void main(String args []){
        int count =0;
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        char[] c=a.toCharArray();
        char []d=b.toCharArray();
        for (int i=0;i<c.length;i++){
            for(int j=0; j<d.length;j++){
                if(c[i]==d[j]){
                    count++;
                }
            }
        }if(count>=c.length){
            System.out.println("panagram");
        }else{
            System.out.println("not panagram");
        }
    }
}
