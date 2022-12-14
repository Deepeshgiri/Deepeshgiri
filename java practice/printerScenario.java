import java.util.Locale;
import java.util.Scanner;

public class printerScenario {


    public static void main(String [] args) {
        //initializing possible scenario
        String a = "print";
        String b= "cancel";
        //person start
        Scanner sc = new Scanner(System.in);
        System.out.println("type 'print' to take print out,\ntype 'cancel' to abort");
        //input from person
        String input = sc.next();

        // computer taking instruction
        if (a.equals(input.toLowerCase())) {
            //computer communicating with printer
            System.out.println("your print here");
            // computer taking instruction
        } else if (b.equals(input.toLowerCase())) {
            //computer communicating with printer
            System.out.println("print command aborted");
        } else {
            //computer giving feedback to person
            System.out.println("invalid command please try again");
        }

    }
}
