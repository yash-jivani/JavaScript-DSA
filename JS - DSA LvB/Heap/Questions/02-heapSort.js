class Solution
{
    //Heapify function to maintain heap property.
    heapify(arr,n,i)
    {
    //code here
        let largest = i; // Initialize largest as root
        let left = 2 * i + 1; // left = 2*i + 1
        let right = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (left < n && arr[left] > arr[largest])
            largest = left;
 
        // If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest])
            largest = right;
 
        // If largest is not root
        if (largest != i) {
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            this.heapify(arr, n, largest);
        }
    
    
    }
    
    //Function to sort an array using Heap Sort.
    heapSort(arr,n)
    {
    //code here
        
        let size = arr.length;
 
        // Build heap (rearrange array)
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--)
            this.heapify(arr, size, i);
 
        // One by one extract an element from heap
        for (let i = size - 1; i > 0; i--) {
            // Move current root to end
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            this.heapify(arr, i, 0);
        }
    
    }
    
}