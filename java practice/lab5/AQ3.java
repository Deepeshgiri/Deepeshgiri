public class AQ3 {
    //⦁	Given an array A of n numbers, write a program to find the number of even numbers in A.
    public static void main(String args []){
        int temp=0;
        int b[]={9,2,41,5,6,67,7,88,8,9,10};
        for(int i=0;i<b.length;i++){
            if(b[i]%2==0){
                temp=temp+1;
            }
        }
        System.out.println(temp);

    }
}
