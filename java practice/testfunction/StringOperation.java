import java.util.Scanner;

public class StringOperation {
    public static int wordcount(char[] x){
        int count=0,alphabet=0;
        for(int i = 0;i<x.length; i++){
                count++;
                alphabet++;
            }

        return count;
    }
    public static char [] chararr(String x){
        char []y=new char[x.length()];

        for(int i=0;i< y.length;i++){
            y[i]=x.charAt(i);
        }
        int a=wordcount(y);
        System.out.println(a);
//        for(int i=0;i<y.length;i++){
//            System.out.println(y[i]);
//        }
        return y;
    }
    public static void main(String args []){
        Scanner sc = new Scanner(System.in);
        String a= sc.nextLine();

        System.out.println(chararr(a));

    }

}
