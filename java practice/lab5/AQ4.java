public class AQ4 {
    //⦁	Given an array A of n numbers and a number x,
    // does there exist a pair (a,b) in A such that the summation of a and b is equal to x.
    public static void main(String args []){
        int b[]={9,2,41,5,6,67,7,88,8,9,10,3,4,66,7};
        int x=13;

        for(int i=0;i< b.length;i++){
            for(int j=i+1;j<b.length;j++){
                if(b[i]+b[j]==x){
                    System.out.println(b[i]+" + "+b[j]+" = "+x);
                }
            }
        }
    }
}
