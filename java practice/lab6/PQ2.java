import java.sql.SQLOutput;
import java.util.Scanner;

public class PQ2 {
    //Read a word and print the same.
    //Write a program to reverse the given word.
    //Read a sentence using cin.getline() and print the same.
    public static void main(String args []){
        String word="";
        Scanner sc = new Scanner(System.in);
        word = sc.next();
        //printing simple word
        System.out.println(word);


        //reverse word
        for(int i =word.length();i>=1;i--){
            System.out.print(word.charAt(i-1));
            }
        System.out.println();
        Scanner bc= new Scanner(System.in);
        System.out.println("enter the new sentence");
        String Z= bc.nextLine();

        System.out.println(Z);
        }
    }

