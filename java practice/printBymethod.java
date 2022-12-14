import java.util.Scanner;

public class printBymethod {
    static String person(){
        Scanner sc = new Scanner(System.in);
        String input = sc.next();
        return input.toLowerCase();

    }
    static String computer(){
        String a = "print";
        String b= "cancel";
        String c = "invalid";
        if (a.equals(person())){
            return a;
        }else if (b.equals(person())){
            return b;
        }else {
            return c;
        }

    }
    static void printer(){
        System.out.println("your print here"+ computer());
        System.out.println("print command aborted" + computer());


    }

    public static void main(String [] args){
        System.out.println("type 'print' to take print out,\ntype 'cancel' to abort");
        printer();


    }
}
