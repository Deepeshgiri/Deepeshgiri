public class test1 {
    public int pivotIndex(int[] nums) {
        int pos =0;
        for (int i=0;i<nums.length;i++){
            int sum=0;
            sum=sum+nums[i];
            for (int j=i+1;j<nums.length;j++){
                int sum2=0;
                sum2= sum2+nums[j];
                if(sum==sum2){
                   return pos=i;
                }else {
                  return pos= -1;
                }

            }
        }return -1;

    }

    public static void main(String args []){
        int ar[]= new int[];
        ar[0]=3;
        ar[1]=3;
        twoSum(ar,6);

    }
}
