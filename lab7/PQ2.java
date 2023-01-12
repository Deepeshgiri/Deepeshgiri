import java.util.Scanner;

public class PQ2 {
    //Given a string S, write a function to convert all the characters in S to the upper case
    // letters using the following prototype.
    //void convertToUpper(char S[])
    public static char[] convertToUpper(char S[]){
        for(int i=0;i<S.length;i++){
            if(S[i]<123&&S[i]>97){
                S[i]= (char)(S[i]-32);
            }
        }
        return S;
    }

    public static void main(String args []){
        Scanner sc = new Scanner(System.in);
        String S= sc.next();
        char[]word=S.toCharArray();
        convertToUpper(word);
        System.out.println(word);

    }
}
