# Binary

> 숫자를 입력 받아 이진수로 출력하는 프로그램을 작성하시오.

```c
#include <stdio.h>

int main()
{
    int number;
    int binary[20] = { 0, };
    
    scanf("%d", &number);

    int position = 0;
    while (1)
    {
        binary[position]=number % 2;            
        number=number / 2;
        position++;

        if (number == 0)    
            break;
    }

    for (int i=position-1; i>=0; i--)
    {
        printf("%d", binary[i]);
    }

    printf("\n");

    return 0;
}
```