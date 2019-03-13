#include <stdio.h>

int main() {

  //Please Enter Your Code Here
  int n, arr[100];
  
  scanf("%d", &n);
  
  for(int i=0; i<n; i++){
    scanf("%d", &arr[i]);
  }
  
  for(int i=0; i<n; i++){
    
    for(int j=0; j<n-i-1; j++){
      if(arr[j] > arr[j+1]) {
        int temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  for(int i=0; i<n; i++){
    printf("%d ",arr[i]);
  }
  
  printf("\n");
  return 0;
}