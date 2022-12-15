import java.util.Scanner;

public class person {
    public String command(){

        Scanner sc = new Scanner(System.in);
        System.out.println("type 'print' to take print out,\ntype 'cancel' to abort");
        //input from person
        String input = sc.next().toLowerCase();
        return input;
    }


}
