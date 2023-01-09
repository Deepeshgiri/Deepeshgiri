public class AQ6 {
    //⦁	Given an array A of n integers, write a program to print all the  pairs
    // (all possible pairs (A[i], A[j]), such that i < j).

    public static void main(String args []){
        int a[]={23,43,54,29,455,22,63,3,52,2,20};

        for(int i=0;i< a.length;i++){
            for (int j=0;j<a.length;j++){
                if(a[i]<a[j]){
                    System.out.print(a[i]+" <"+a[j]+"  ;");
                }
            }
        }
    }
}
