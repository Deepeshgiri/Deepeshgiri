import java.util.Arrays;
import java.util.Objects;
import java.util.Scanner;

public class EQ2 {
    //Write a program to replace all occurrences of “madras” with “chennai” in a given sentence.
    public static void main(String args[]){
       // char w[]=new char[25];

        Scanner sc= new Scanner(System.in);
       char w[]=sc.nextLine().toCharArray();
        for (int i=0;i<w.length;i++){
            System.out.print(w[i]);
        }
        for(int j = 0;j<w.length;j++){
            if(w[j]=='m'){
                if(w[j+1]=='a'){
                    if(w[j+2]=='d'){
                        if(w[j+3]=='r'){
                            if(w[j+4]=='a'){
                                if(w[j+5]=='s'){
                                    w[j]='c';
                                    w[j+1]='h';
                                    w[j+2]='e';
                                    w[j+3]='n';
                                    w[j+4]='n';
                                    w[j+5]='a';
                                    w[j+6]='i';
                                }
                            }
                        }
                    }
                }
            }
        }
        for (int i=0;i<w.length;i++){
            System.out.print(w[i]);
        }

    }
}
