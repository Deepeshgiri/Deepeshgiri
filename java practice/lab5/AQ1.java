import java.util.Scanner;

public class AQ1 {
    //⦁	Declare an array A to store 1000 integers. Initialize the array using various types such
    // as “cin”, “assigning directly”,  “initialization along with declaration”.
    //⦁	Given an array A of n numbers, write a program to find the smallest element in A.
    public static void main(String args []){
        int a[] =new int[5];
        int b[]={9,2,41,5,6,67,7,88,8,9,10};
         a[0]=4;
         a[1]=5;
         a[2]=34;
         a[3]=7436;
         int c []= new int[5];
        Scanner sc = new Scanner(System.in);

        for (int i=0;i<=a.length-1;i++){
            System.out.print(a[i]+" ");
        }
        System.out.println();
        for(int j=0;j<= b.length-1;j++){
            System.out.print(b[j]+" ");
        }
        System.out.println();
//        for(int i=0;i<=c.length-1;i++){
//            System.out.println("enter the value at "+i+" position of array");
//            c[i]= sc.nextInt();
//        }
        //smallest number in array;
        int temp=0;
        int small=b[0];
        for(int i=0;i<=b.length-1;i++){
            if (b[i]<small){
                small=b[i];

            }
        }System.out.println(small);

    }
}
