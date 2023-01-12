import java.util.Scanner;

public class AQ5 {
  //⦁	Write a program to arrange the given n numbers in an array in ascending order.
        public static void main(String args[]){
            int a[]={23,43,54,22,22,455,22,63,3,52,2,20};

            for(int i=0; i<(a.length);i++)
            {
                for(int j=0;j<a.length-i-1;j++)
                    if (a[j] > a[j + 1]) {
                        int temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;
                    }
               // System.out.print(a[i]+" ");

            }
            for(int i=0;i<a.length;i++){
                System.out.print(a[i]+" ");
            }


        }

  }

