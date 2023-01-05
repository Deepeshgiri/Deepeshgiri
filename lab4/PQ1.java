import java.util.Scanner;

public class PQ1 {
    //⦁	Write a program to read the marks of a student and print the grade as per the following table. Use else if ladder to solve this problem. If the input marks are not between 0 and 100, print that the input data is invalid.
    //Marks	Grade
    //>= 90	S
    //80 to 89	A
    //70 to 79	B
    //60 to 69	C
    //50 to 59	D
    //40 to 49	E
    //less than 40	F
    public static void main(String args []){
        int marks;
        Scanner sc = new Scanner(System.in);
        marks = sc.nextInt();
        if(marks>=90){
            System.out.println("Grade S");
        } else if(marks>=89){
            System.out.println("Grade A");
        } else if(marks>=79){
            System.out.println("Grade B");
        } else if(marks>=69){
            System.out.println("Grade C");
        } else if(marks>=59){
            System.out.println("Grade D");
        } else if(marks<49){
            System.out.println("Grade F");
        }
    }
}
