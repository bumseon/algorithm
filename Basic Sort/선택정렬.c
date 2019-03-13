#include <stdio.h>

int main() {

  //Please Enter Your Code Here
  int n;
  int data[100];
  
  scanf("%d", &n);
  for(int i=0; i<n; i++) {
    scanf("%d", &data[i]);
  }
  
  for(int i=0; i<n; i++){
    int inx = i;
    
    for(int j=i; j<n; j++){
      if(data[inx] > data[j]) {
        inx = j;
      }
    }
    
    int temp;
    temp = data[i];
    data[i] = data[inx];
    data[inx] = temp;
  }
  
  for(int i=0; i<n; i++)
    printf("%d ", data[i]);
  
  printf("\n");
  
  return 0;
}