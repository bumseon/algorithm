# Binary

> ���ڸ� �Է� �޾� �������� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.

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